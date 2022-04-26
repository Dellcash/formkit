<script setup>
import { ref } from "vue";
const submitted = ref(false);
const formData = ref({});
const submitHandler = async () => {
	// Let's pretend this is an ajax request:
	await new Promise((r) => setTimeout(r, 1000));
	submitted.value = true;
};
</script>

<template>
	<div class="container">
		<FormKit
			type="form"
			v-model="formData"
			:form-class="submitted ? 'hide' : 'show'"
			submit-label="ثبت نام"
			@submit="submitHandler"
		>
			<h1>ثبت نام!</h1>
			<FormKit
				type="text"
				name="name"
				label="نام کاربری"
				placeholder="دلکش"
				validation="required"
			/>
			<FormKit
				type="text"
				name="email"
				label="ایمیل"
				placeholder="dellcash@example.com"
				style="direction: ltr"
				validation="required|email"
			/>
			<div class="double">
				<FormKit
					type="password"
					name="password"
					label="پسورد"
					validation="required|length:6|matches:/[^a-zA-Z]/"
					:validation-messages="{
						matches: 'حداقل یک نماد باید وارد شود.',
					}"
					placeholder="پسورد"
				/>
				<FormKit
					type="password"
					name="password_confirm"
					label="تایید پسورد"
					placeholder="تایید پسورد"
					validation="required|confirm"
				/>
			</div>
		</FormKit>
		<div v-if="submitted">
			<h2>ثبت نام با موفقیت انجام شد!</h2>
		</div>
	</div>
</template>

<style>
* {
	font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
	background-color: black;
	color: #fff;
}

.container {
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	padding: 20px;
}

.formkit-inner {
	width: 23rem;
}

[data-type="submit"] .formkit-input {
	width: 100% !important;
	margin: 0 !important;
}
[data-type="submit"] .formkit-input::before {
	margin-left: 5px !important;
}
</style>
