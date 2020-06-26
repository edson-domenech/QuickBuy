import { Component, OnInit } from "@angular/core";
import { Usuario } from "src/app/model/usuario";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})

export class LoginComponent implements OnInit {  
  public imgTitle = "Título da imagem";
  public usuario;  
  public returnUrl: string;
  //public usuarios = ["Usuário 1", "Usuário 2", "Usuário 3", "Usuário 4"];  
  //public usuarioAutenticado;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.usuario = new Usuario();    

    if (this.activatedRoute.snapshot.queryParams["returnUrl"]) {
        this.returnUrl = this.activatedRoute.snapshot.queryParams["returnUrl"];
    }
    else {
        this.returnUrl = "/";
    }    
  }

  entrar() {
    /*
    alert(this.usuario.email + " - " + this.usuario.senha);
    this.usuarioAutenticado = this.usuario.email == "a" && this.usuario.senha == "a";
    */

    if (this.usuario.email == "eds@eds" && this.usuario.senha == "eds") {
        //localStorage.setItem("usuario-autenticado", "1");//HTML5 -> localStorage sempre fica guardado no navegador, não é controlado por sessão
        sessionStorage.setItem("usuario-autenticado", "1");//HTML5 -> sessionStorage é controlado por sessão
        this.router.navigate([this.returnUrl]);
    }
  }

}
