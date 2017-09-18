// controller.js = Luis Hidalgo de Tena

data =
        {
            user :
            {
                name : "Luis",
                email: "@gmail.com"
            }
        }
var app = new Vue(
    {
        el : '#intro',
        data : data,
        methods:{
            getUsers: function(){
                axios.get("http://127.0.0.1:5657/person")
                .then(response =>{
                    this.data=response.data;
                })
            }
        },
        computed : {
            name: function(){
                return axios.get("http://127.0.0.1:5657/person/name")
                    .then(response =>{
                    return response.data;
                    })
            }
        }
})
var app2 = new Vue(
    {
        el : '#findMe',
        data :data

})

