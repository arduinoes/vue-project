import { defineStore } from "pinia";
import { supabase } from "@/supabase";

// interface para TypeScript
export interface Element {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
}

// interface para el "stage"
interface ElementState {
  // Array de elementos
  elementos: Element[];
  // Array de ids
  ids: string[];
  //  Objeto con array de ids + array de elementos
  items: Record<string, Element>;

  loading: boolean;
  
}

export const storeElementos = defineStore({
  id: "elementos",
  state: (): ElementState => ({
    elementos: [],
    ids: [],
    items: {},
    loading: false,
  }),

  actions: {
    async obtenerElementos() {
      this.loading =true;
      console.log("Estado de carga 1: ", this.loading)
      try {
        const { data: elementos, error } = await supabase
          .from("elementos")
          .select("*")
          .order("id");

        if (error) {
          console.log("error", error);
          return;
        }
        // // Si elementos es un null
        // if (elementos === null) {
        // // El array no tiene elementos
        //   this.elementos = [];
        // }
        // Guarda los elementos del array
        this.elementos = elementos;
        console.log("Obtener array de elementos: ", this.elementos);

        const datos: Element[] = this.elementos;
        // Crea un array con los ids de los elementos
        this.ids = datos.map((element) => {
        // Crea un objeto con los id y los elementos
        this.items[element.id] = element;
          return element.id;
        });
        console.log("Este es el array ids", this.ids);
        console.log("Este es el objeto items", this.items);
      
      } catch (err) {
        console.error("Error recibiendo datos desde db", err);
      }
      finally{
        this.loading =false;
        console.log("Estado de carga 2: ", this.loading)
      }
    },
  },
});
