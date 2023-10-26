"use Client"

import Modal from "./Modal";

import { useRouter } from "next/navigation";
import { useSessionContext, useSupabaseClient } from "@supabase/auth-helpers-react";


const AuthModal = () => {
  const supabaseClient = useSupabaseClient();
  const router = useRouter();
 

  return ( 
    <Modal
      title="welcome back"
      description="login to your account"
      isOpen
      onChange={() => {}}
    >
      Auth modal children!
    </Modal>
  );
}
 
export default AuthModal;