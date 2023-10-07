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

import Container from "./Container";

export default function Login(props: PaperProps) {
	const { setColorScheme, clearColorScheme } = useMantineColorScheme();
	const form = useForm({
		initialValues: {
			email: "",
			name: "",
			password: "",
			terms: true,
		},

		validate: {
			email: (val) => (/^\S+@\S+$/.test(val) ? null : "Email inválido"),
			password: (val) =>
				val.length <= 5 ? "Senha deve ter no mínimo 6 caracteres" : null,
		},
	});

	setColorScheme("dark");

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

						<form onSubmit={form.onSubmit(() => {})}>
							<Stack>
								<TextInput
									required
									label="Email"
									placeholder="user@finebank.com"
									value={form.values.email}
									onChange={(event) =>
										form.setFieldValue("email", event.currentTarget.value)
									}
									error={form.errors.email && "Email inválido"}
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
