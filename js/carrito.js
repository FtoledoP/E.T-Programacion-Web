function productoAgregado(){
    window.alert("Producto agregado correctamente")
}

//------------------------------------- ARRAY de los Productos que hay actualmente en la tienda------------------------------------------
let arrayProductos = [
    {
        idProducto: 1,
        tituloProducto:"Arnes para Perros",
        imgProducto:"img/img7.png",
        precioProducto: "$20.000"
    },
    {
        idProducto: 2,
        tituloProducto:"Comida para Perros",
        imgProducto:"img/img6.jpg",
        precioProducto: "$25.000"
    },
    {
        idProducto: 3,
        tituloProducto:"Cama para Perros",
        imgProducto:"img/img4.jpg",
        precioProducto: "$75.990"
    },
    {
        idProducto: 4,
        tituloProducto:"Arnes para Gatos",
        imgProducto:"img/imag7.jpg",
        precioProducto: "$15.000"
    },
    {
        idProducto: 5,
        tituloProducto:"Comida para Gatos",
        imgProducto:"img/img777.jpg",
        precioProducto: "$20.000"
    },
    {
        idProducto: 6,
        tituloProducto:"Cama para Gatos",
        imgProducto:"img/img77.jpg",
        precioProducto: "$55.990"
    },
    {
        idProducto: 7,
        tituloProducto:"Hamaca para Hamster",
        imgProducto:"img/img99.png",
        precioProducto: "$15.000"
    },
    {
        idProducto: 8,
        tituloProducto:"Cama para Conejos",
        imgProducto:"img/img13.jpg",
        precioProducto: "$20.000"
    },
    {
        idProducto: 9,
        tituloProducto:"Arnes para Conejos",
        imgProducto:"img/img14.png",
        precioProducto: "$55.990"
    },
    {
        idProducto: 10,
        tituloProducto:"Comida para Conejos",
        imgProducto:"img/img15.jpg",
        precioProducto: "$20.000"
    },
    {
        idProducto: 11,
        tituloProducto:"Identificador para Perros",
        imgProducto:"img/img16.jpg",
        precioProducto: "$25.000"
    },
    {
        idProducto: 12,
        tituloProducto:"Correa para Reptiles",
        imgProducto:"img/img17.png",
        precioProducto: "$35.990"
    }
]

function llenarMas(){

    const insertar = document.querySelector(".containerProductos")

    arrayProductos.forEach(producto =>{
    const div = document.createElement("div")
    div.className = "item"
    const span1 = document.createElement("span")
    span1.className = "idProducto"
    span1.textContent = "SKU: ".concat(producto.idProducto)
    const span2 = document.createElement("span")
    span2.className = "tituloProducto"
    span2.textContent = producto.tituloProducto
    const img = document.createElement("img")
    img.className = "imgProducto"
    img.src = producto.imgProducto
    const span3 = document.createElement("span")
    span3.className = "precioProducto"
    span3.textContent = producto.precioProducto
    const btn = document.createElement("button")
    btn.className = "btnProducto"
    btn.textContent = "Agregar al Carrito"
    btn.type = "button"

    div.appendChild(span1)
    div.appendChild(span2)
    div.appendChild(img)
    div.appendChild(span3)
    div.appendChild(btn)

    insertar.appendChild(div)
})

}

function llenarIndex(){

    const insertar = document.querySelector(".containerProductos")

    arrayProductos.forEach(producto =>{

        if (producto.idProducto === 7 || producto.idProducto === 8 || producto.idProducto === 9) {

            const div = document.createElement("div")
            div.className = "item"
            const span1 = document.createElement("span")
            span1.className = "idProducto"
            span1.textContent = "SKU: ".concat(producto.idProducto)
            const span2 = document.createElement("span")
            span2.className = "tituloProducto"
            span2.textContent = producto.tituloProducto
            const img = document.createElement("img")
            img.className = "imgProducto"
            img.src = producto.imgProducto
            const span3 = document.createElement("span")
            span3.className = "precioProducto"
            span3.textContent = producto.precioProducto
            const btn = document.createElement("button")
            btn.className = "btnProducto"
            btn.textContent = "Agregar al Carrito"
            btn.type = "button"

            div.appendChild(span1)
            div.appendChild(span2)
            div.appendChild(img)
            div.appendChild(span3)
            div.appendChild(btn)

            insertar.appendChild(div)
        }

    
})

}

function llenarPerros(){

    const insertar = document.querySelector(".containerProductos")

    arrayProductos.forEach(producto =>{

        if (producto.idProducto === 1 || producto.idProducto === 2 || producto.idProducto === 3) {

            const div = document.createElement("div")
            div.className = "item"
            const span1 = document.createElement("span")
            span1.className = "idProducto"
            span1.textContent = "SKU: ".concat(producto.idProducto)
            const span2 = document.createElement("span")
            span2.className = "tituloProducto"
            span2.textContent = producto.tituloProducto
            const img = document.createElement("img")
            img.className = "imgProducto"
            img.src = producto.imgProducto
            const span3 = document.createElement("span")
            span3.className = "precioProducto"
            span3.textContent = producto.precioProducto
            const btn = document.createElement("button")
            btn.className = "btnProducto"
            btn.textContent = "Agregar al Carrito"
            btn.type = "button"

            div.appendChild(span1)
            div.appendChild(span2)
            div.appendChild(img)
            div.appendChild(span3)
            div.appendChild(btn)

            insertar.appendChild(div)
        }

    
})

}

function llenarGatos(){

    const insertar = document.querySelector(".containerProductos")

    arrayProductos.forEach(producto =>{

        if (producto.idProducto === 4 || producto.idProducto === 5 || producto.idProducto === 6) {

            const div = document.createElement("div")
            div.className = "item"
            const span1 = document.createElement("span")
            span1.className = "idProducto"
            span1.textContent = "SKU: ".concat(producto.idProducto)
            const span2 = document.createElement("span")
            span2.className = "tituloProducto"
            span2.textContent = producto.tituloProducto
            const img = document.createElement("img")
            img.className = "imgProducto"
            img.src = producto.imgProducto
            const span3 = document.createElement("span")
            span3.className = "precioProducto"
            span3.textContent = producto.precioProducto
            const btn = document.createElement("button")
            btn.className = "btnProducto"
            btn.textContent = "Agregar al Carrito"
            btn.type = "button"

            div.appendChild(span1)
            div.appendChild(span2)
            div.appendChild(img)
            div.appendChild(span3)
            div.appendChild(btn)

            insertar.appendChild(div)
        }

    
})

}

