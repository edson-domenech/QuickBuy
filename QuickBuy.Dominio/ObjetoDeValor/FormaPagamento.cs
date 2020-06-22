using QuickBuy.Dominio.Enumerados;
using System;
using System.Collections.Generic;
using System.Net.Sockets;
using System.Text;

namespace QuickBuy.Dominio.ObjetoDeValor
{
    public class FormaPagamento
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public bool NaoFoifinido
        {
            get
            {
                return Id == (int)TipoFormaPagamentoEnum.NaoDefinido;

            }
        }
        public bool EhBoleto
        {
            get
            {
                return Id == (int)TipoFormaPagamentoEnum.Boleto;

            }
        }
        public bool EhCartaoCredito
        {
            get
            {
                return Id == (int)TipoFormaPagamentoEnum.CartaoCredito;

            }
        }
        public bool EhDeposito
        {
            get
            {
                return Id == (int)TipoFormaPagamentoEnum.Deposito;

            }
        }
    }
}
