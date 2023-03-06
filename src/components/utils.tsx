export interface IProject {
    handle: string;
  next_handle: string;
  title: string;
  logo_color: string;
  list_image: string;
  description: string;
  color1: string;
  color2: string;
}
export interface IProjectPage {
    handle: string;
  next_handle: string;
  title: string;
  logo:string;
  logo_color: string;
  list_image: string;
  description: string;
  color1: string;
  color2: string;
  hero_image:string;
  chips:number[];
}

export const Tags = [
    ["Shopify","#00ff00"],
    ["Amazon","#00ff00"],
    ["Development","#00ff00"],
]