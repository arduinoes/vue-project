import { defineStore } from "pinia";
import { supabase } from "@/supabase";
import router from '@/router/index'

interface Credentials {
  email: string;
  password: string;
  repassword?: string | undefined;
  loading: boolean;
  session: any | null;
}

export const storeAuth = defineStore({
  id: "usuarios",
  state: (): Credentials => ({
    email: '',
    password: '',
    repassword: '',
    loading: false,
    session:'',
  }),
  actions: {
  // Iniciar Sesión
  async iniciarSesion () {
      try {
        this.loading = true
        const { data, error } = await supabase.auth.signInWithPassword({
          email: this.email,
          password: this.password
        })
        if (error) throw error
        alert('¡Sesión iniciada!')
      } catch (error) {
        if (error instanceof Error) {
          alert(error.message)
        }
      } finally {
        //this.sesion ();
        router.push({ path: '/store' })
        this.loading = false;
      }
    },
    // Registra un nuevo usuario y envía un email para la activación
    async registrarse () {
      try {
        this.loading = true
        
        const { data, error } = await supabase.auth.signUp({
          email: this.email,
          password: this.password
        })
        if (error) throw error
        alert('Verifica el registro a través del enlace de tu correo electrónico!')
      } catch (error) {
        if (error instanceof Error) {
          alert(error.message)
        }
      } finally {
        this.loading = false
      }
    },
    // Registra usuarios de terceros Github, Google...
 
    // Actualiza la contraseña del usuario
    
    // Finaliza la sesión del usuario
    async salir() {
      try {
        this.loading = true;
        let { error } = await supabase.auth.signOut();
        if (error) throw error;
      } catch (error: any) {
        alert(error.message);
      } finally {
        this.sesion ();
        router.push({ path: "/store"});
        this.loading = false;
      }
    },
    async sesion () {
        supabase.auth.getSession().then(({ data }) => {
          this.session = data.session
          console.log("Sesión: ", data.session)
        })
     
        supabase.auth.onAuthStateChange((_, _session) => {
          this.session = _session
        })
    }
  }
});

