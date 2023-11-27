import axios from "axios";
import Swal from "sweetalert2";

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
	didOpen: (toast) => {
		toast.addEventListener("mouseenter", Swal.stopTimer);
		toast.addEventListener("mouseleave", Swal.resumeTimer);
	},
});

function showSuccessMsg(msg) {
	Toast.fire({
		icon: "success",
		title: msg,
	});
}

// ERRORS WARNING
export function handleErrors(error, errorMsg = "") {
	let textError = "";

	if (error.response?.status === 400) {
		textError = errorMsg.badRequest;
	} else if (error.response?.status === 401) {
		textError = "Não autorizado";
	} else if (!error.response?.status) {
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

export default async function login(register_number, password) {
	try {
		const response = await axiosInstance.post("auth/jwt/create/", {
			register_number: parseInt(register_number),
			password: password,
		});

		showSuccessMsg("Login com sucesso");

		return response.data;
	} catch (err) {
		handleErrors(err, {
			badRequest: "Faltando EDV ou senha",
			unauthorized: "Login inválido",
			rest: "Login falhou",
		});
	}
}

export async function createJWTWithRefreshToken(refresh) {
	try {
		const response = await axiosInstance.post("auth/jwt/refresh/", {
			refresh: refresh,
		});

		return response.data.access;
	} catch (err) {
		console.log("Erro no createJWTWithRefreshToken");
	}
}

export async function verifyRefreshToken(refresh) {
	try {
		const response = await axiosInstance.post("auth/jwt/verify/", {
			token: refresh,
		});

		if (response.status == 200) {
			return true;
		}
	} catch (err) {
		console.log("Erro no verifyRefreshToken");
	}
}

export async function verifyJWT(token) {
	try {
		const response = await axiosInstance.post("auth/jwt/verify/", {
			token: token,
		});

		if (response.status == 200) {
			return true;
		}
	} catch (err) {
		return false;
	}
}
