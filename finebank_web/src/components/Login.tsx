"use client";

import { useForm } from "@mantine/form";
import {
	TextInput,
	PasswordInput,
	Paper,
	Group,
	PaperProps,
	Button,
	Stack,
	useMantineColorScheme,
} from "@mantine/core";

import { useRouter } from "next/navigation";

import Container from "./Container";
import { useAuth } from "@/auth/AuthContext";
import { loginAPI } from "@/services/api";

export default function Login(props: PaperProps) {
	// const { setColorScheme, clearColorScheme } = useMantineColorScheme();
	const form = useForm({
		initialValues: {
			cpfOrCnpj: "",
			password: "",
			terms: true,
		},

		validate: {
			cpfOrCnpj: (val) => {
				const isCpfValid = val.length === 11;
				const isCnpjValid = val.length === 14;
				return isCpfValid || isCnpjValid ? null : "CPF/CNPJ inválido";
			},
			password: (val) =>
				val.length <= 5 ? "Senha deve ter no mínimo 6 caracteres" : null,
		},
	});

	const { login } = useAuth();
	const router = useRouter();

	// setColorScheme("dark");

	async function handleLogin(cpfOrCnpj: string, password: string) {
		// Implement your login logic, and call the login function from the context
		const jwt = await loginAPI(cpfOrCnpj, password);
		login({ jwt });
		// router.push("/content");
	}

	return (
		<section className="flex w-full h-full bg-primary-black">
			<Container>
				<div className="flex justify-center h-[80%] w-full">
					<Paper
						className="w-[90%] max-w-[598px] h-fit"
						radius="md"
						p="xl"
						withBorder
						{...props}
					>
						<h1 className="my-5 text-3xl font-semibold text-primary-white mb-5 text-center">
							Login
						</h1>

						<form
							onSubmit={form.onSubmit(() =>
								handleLogin(form.values.cpfOrCnpj, form.values.password)
							)}
						>
							<Stack>
								<TextInput
									type="number"
									required
									label="CPF / CNPJ"
									placeholder="xxx.xxx.xxx-xx"
									value={form.values.cpfOrCnpj}
									onChange={(event) =>
										form.setFieldValue("cpfOrCnpj", event.currentTarget.value)
									}
									error={form.errors.cpfOrCnpj && "CPF/CNPJ inválido"}
									radius="md"
								/>

								<PasswordInput
									required
									label="Senha"
									placeholder="senha"
									value={form.values.password}
									onChange={(event) =>
										form.setFieldValue("password", event.currentTarget.value)
									}
									error={
										form.errors.password &&
										"Senha deve ter no mínimo 6 caracteres"
									}
									radius="md"
									max={20}
								/>
							</Stack>

							<Group justify="space-between" mt="xl">
								<Button
									type="submit"
									className="bg-light-yellow text-primary-black rounded-3xl"
								>
									Login
								</Button>
							</Group>
						</form>
					</Paper>
				</div>
			</Container>
		</section>
	);
}
