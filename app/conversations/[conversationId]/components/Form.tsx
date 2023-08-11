'use client'

import useConversation from "@/app/hooks/useConversation";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import axios from "axios";
import ConversationId from "../page";
import { HiArrowUpCircle, HiOutlineArrowUpCircle, HiPaperAirplane, HiPhoto } from "react-icons/hi2";
import MessageInput from "./MessageInput";
import { HiArrowUp, HiOutlinePaperAirplane } from "react-icons/hi";

const Form = () => {
    const { conversationId } = useConversation();

    const{
        register,
        handleSubmit,
        setValue,
        formState: {
            errors,
        }
    } = useForm<FieldValues>({
        defaultValues: {
            message: ''
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setValue('message', '', {shouldValidate: true});

        axios.post('/api/messages'),{
            ...data,
            conversationId
        }
    }
    return ( 
        <div
            className="
                py-4
                px-4
                bg-white
                flex
                border-t
                items-center
                gay-2
                lg:gap-4
                w-full
            "
        >

            <HiPhoto size={30} className="text-sky-500" />
            <form
                onSubmit={handleSubmit(onSubmit)}
                className=" flex items-center gay-2 lg:gap-4 w-full"
            >
                <MessageInput 
                    id='message'
                    register={register}
                    errors={errors}
                    required
                    placeholder= "Message"
                />
                <button
                    type='submit'
                    className="
                        rounded-full
                        bg-sky-500
                        cursor-pointer
                        hover:bg-sky-600
                        transition     
                        px-1
                        py-1                 
                    "
                >
                    <HiArrowUp
                        size={20}
                        className="text-white"
                    />

                </button>
            </form>
        </div>
     );
}
 
export default Form;
