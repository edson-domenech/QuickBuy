import { Component } from "@angular/core";
import { Usuario } from "src/app/model/usuario";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})

export class LoginComponent {  
  public imgTitle = "Título da imagem";
  public usuario;  
  //public usuarios = ["Usuário 1", "Usuário 2", "Usuário 3", "Usuário 4"];  
  public usuarioAutenticado;

  constructor() {
    this.usuario = new Usuario();
  }

  entrar() {
    /*
    alert(this.usuario.email + " - " + this.usuario.senha);
    this.usuarioAutenticado = this.usuario.email == "a" && this.usuario.senha == "a";
    */
  }

}
