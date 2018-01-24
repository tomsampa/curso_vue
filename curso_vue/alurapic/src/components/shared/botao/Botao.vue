<template>
  <button @click="disparaAcao()" class="botao" :class="estiloBotao" :type="tipo">{{ rotulo }}</button>
</template>

<script>
export default {
    
    props: {
        tipo: {
            required: true,
            type: String
        },
        rotulo: {
            required: true,
            type: String
        },
        confirmacao: {
            type: Boolean
        },
        estilo: {
            type: String
        }
    },

    methods: {
        disparaAcao() {
            if(this.confirmacao){
                if(confirm('Confirma operação?')){
                    this.$emit('botaoAtivado');
                }
                return;
            }
            this.$emit('botaoAtivado');
        }
    },

    computed: {
        estiloBotao() {
            if(this.estilo == 'padrao' || !this.estilo) return 'botao-padrao';
            if(this.estilo == 'perigo') return 'botao-perigo';
        }
    }
}
</script>

<style lang="scss">

    $cor: blue;

    .botao {
        display: inline-block;
        padding: 10px;
        border-radius: 3px;
        margin: 10px;
        font-size: 1.2em;
    }

    .botao-perigo {
        background: $cor;
        color: white;
    }

    .botao-padrao {
        background: darkcyan;
        color: white;
    }
</style>


