import { FormControl, FormGroup, FormLabel, Input, InputLabel } from "@mui/material"
import { ReactElement } from "react"

const Form = (): ReactElement => {
    return (
        <>
            <FormControl>
                dsa
            </FormControl>
            <FormGroup>
                <InputLabel>dasdsa</InputLabel>
                <FormControl>
                    <Input className="input-text input-text--primary-style" placeholder="First Name"></Input>
                </FormControl>
            </FormGroup>
        </>
    )
}

export default Form