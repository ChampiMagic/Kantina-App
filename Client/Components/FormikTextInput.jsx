import React from "react";
import CustomTextInput from "./CustomTextInput";
import { useField } from "formik";
import ErrorText from "./ErrorText";

export default function FormikTextInput({name, ...props}) {

    const [field, meta, helpers ] = useField(name)

    return (
        <>
            <CustomTextInput
            error={meta.error}
            value={field.value}
            onChangeText={(value) => helpers.setValue(value)}
            {...props}
            />
            {meta.error && <ErrorText>{meta.error}</ErrorText>}
        </>
    )
}