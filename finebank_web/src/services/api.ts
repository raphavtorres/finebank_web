import axios, { AxiosResponse, AxiosError } from "axios";
import Swal from "sweetalert2";

interface ErrorResponse {
  status?: number;
  data?: any; // Adicione campos necessários para a interface de erro
}

export const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1/",
});

// SUCCESS WARNING
const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast: HTMLElement) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

function showSuccessMsg(msg: string): void {
  Toast.fire({
    icon: "success",
    title: msg,
  });
}

// ERRORS WARNING
export function handleErrors(error: number, errorMsg = { badRequest: "", unauthorized: "", rest: "" }): void {
  let textError = "";

	console.log(JSON.parse(error.toString()).details)

  if (error === 400) {
    textError = errorMsg.badRequest;
  } else if (error === 401) {
    textError = errorMsg.unauthorized;
  } else if (!error) {
    textError = "Sem resposta do servidor";
  } else {
    textError = errorMsg.rest;
  }

  Swal.fire({
    icon: "error",
    title: "Eita...",
    text: textError,
    timer: 3000,
  });
}

export async function loginAPI(
  register_number: string,
  password: string
): Promise<any> {
  try {
    const response: AxiosResponse = await axiosInstance.post(
			"auth/jwt/create/",
			{
				register_number: register_number,
				password: password,
			}
		);

    showSuccessMsg("Login com sucesso");

    return response.data;
  } catch (err: any) {
    handleErrors(err.request?.status, {
      badRequest: "Faltando CPF/CNPJ ou senha",
      unauthorized: "Login inválido",
      rest: "Login falhou",
    });

    // Adicione um retorno para lidar com promessas rejeitadas
    return Promise.reject(err);
  }
}

export async function verifyJWT(token: string): Promise<boolean> {
  try {
    const response: AxiosResponse = await axiosInstance.post(
      "auth/jwt/verify/",
      {
        token: token,
      }
    );

    return response.status === 200;
  } catch (err) {
    return false;
  }
}

export async function getAccounts() {
	try {
		const response = await axiosInstance.get("accounts/");
		return response.data;
	} catch (err) {
		console.log(err, " | erro ao pegar as contas");
	}
}

export async function getProfilePic() {
	try {
		const response = await axiosInstance.get(`profile-picture/`);
		return response.data;
	} catch (err) {
		console.log("Erro ao enviar a imagem para a API:", err);
	}
}

// Geting user
export async function getUser(user_type: string) {
	try {
		const response = await axiosInstance.get(`${user_type}-people/`);
		return response.data[0];
	} catch (err) {
		console.log("Erro ao ao pegar o usuário: ", err);
	}
}

export async function getStatements(account: any) {
	try {
		const response = await axiosInstance.get(
			`bank-statement/?account=${account}`
		);
		return response.data;
	} catch (err) {
    console.log("Erro ao pegar as transações: ", err);
	}
}