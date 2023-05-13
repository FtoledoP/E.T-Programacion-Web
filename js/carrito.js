

function productoAgregado(){
    
}

var itemsCarrito = []

function llenarMas(){

    const insertar = document.querySelector(".containerProductos")

    listaProductos.forEach(producto =>{
        let contenido = document.createElement("div")
        contenido.className = "item"
        contenido.innerHTML = `
        <span class="idProducto">SKU: ${producto.idProducto}</span>
        <span class="tituloProducto">${producto.tituloProducto}</span> 
        <img class="imgProducto" src="${producto.imgProducto}">
        <span class="precioProducto">${producto.precioProducto}</span> 
        `
        insertar.append(contenido)

        //Boton para agregar a la lista de carrito

        let agregar = document.createElement("button")
        agregar.innerText = "Agregar al Carrito"
        agregar.className = "btnProducto"

        contenido.append(agregar)

        //Se agrega a la lista de carrito

        agregar.addEventListener("click", function(){
            window.alert("Producto agregado correctamente")
            itemsCarrito.push({
                id: producto.idProducto,
                nombre: producto.tituloProducto,
                img: producto.imgProducto,
                precio: producto.precioProducto
            })
            const obj = JSON.stringify(itemsCarrito);
            console.log(obj);
            localStorage.setItem("carrito",obj);
            console.log("Storage creado");
        })

})}

function llenarIndex(){

    const insertar = document.querySelector(".containerProductos")

    listaProductos.forEach(producto =>{

        if (producto.idProducto === 7 || producto.idProducto === 8 || producto.idProducto === 9) {

            let contenido = document.createElement("div")
            contenido.className = "item"
            contenido.innerHTML = `
            <span class="idProducto">SKU: ${producto.idProducto}</span>
            <span class="tituloProducto">${producto.tituloProducto}</span> 
            <img class="imgProducto" src="${producto.imgProducto}">
            <span class="precioProducto">${producto.precioProducto}</span> 
            `

            insertar.appendChild(contenido)

            //Boton para agregar a la lista de carrito

            let agregar = document.createElement("button")
            agregar.innerText = "Agregar al Carrito"
            agregar.className = "btnProducto"

            contenido.append(agregar)

            //Se agrega a la lista de carrito

            agregar.addEventListener("click", function(){
                window.alert("Producto agregado correctamente")
                itemsCarrito.push({
                    id: producto.idProducto,
                    nombre: producto.tituloProducto,
                    img: producto.imgProducto,
                    precio: producto.precioProducto
                })
                const obj = JSON.stringify(itemsCarrito);
                console.log(obj);
                localStorage.setItem("carrito",obj);
                console.log("Storage creado");
            })
        }

    
})

}

function llenarPerros(){

    const insertar = document.querySelector(".containerProductos")

    listaProductos.forEach(producto =>{

        if (producto.idProducto === 1 || producto.idProducto === 2 || producto.idProducto === 3) {

            let contenido = document.createElement("div")
            contenido.className = "item"
            contenido.innerHTML = `
            <span class="idProducto">SKU: ${producto.idProducto}</span>
            <span class="tituloProducto">${producto.tituloProducto}</span> 
            <img class="imgProducto" src="${producto.imgProducto}">
            <span class="precioProducto">${producto.precioProducto}</span> 
            `

            insertar.appendChild(contenido)

            //Boton para agregar a la lista de carrito

            let agregar = document.createElement("button")
            agregar.innerText = "Agregar al Carrito"
            agregar.className = "btnProducto"

            contenido.append(agregar)

            //Se agrega a la lista de carrito

            agregar.addEventListener("click", function(){
                window.alert("Producto agregado correctamente")
                itemsCarrito.push({
                    id: producto.idProducto,
                    nombre: producto.tituloProducto,
                    img: producto.imgProducto,
                    precio: producto.precioProducto
                })
                const obj = JSON.stringify(itemsCarrito);
                console.log(obj);
                localStorage.setItem("carrito",obj);
                console.log("Storage creado");
            })
        }

    
})

}

function llenarGatos(){

    const insertar = document.querySelector(".containerProductos")

    listaProductos.forEach(producto =>{

        if (producto.idProducto === 4 || producto.idProducto === 5 || producto.idProducto === 6) {

            let contenido = document.createElement("div")
            contenido.className = "item"
            contenido.innerHTML = `
            <span class="idProducto">SKU: ${producto.idProducto}</span>
            <span class="tituloProducto">${producto.tituloProducto}</span> 
            <img class="imgProducto" src="${producto.imgProducto}">
            <span class="precioProducto">${producto.precioProducto}</span> 
            `

            insertar.appendChild(contenido)

            //Boton para agregar a la lista de carrito

            let agregar = document.createElement("button")
            agregar.innerText = "Agregar al Carrito"
            agregar.className = "btnProducto"

            contenido.append(agregar)

            //Se agrega a la lista de carrito

            agregar.addEventListener("click", function(){
                window.alert("Producto agregado correctamente")
                itemsCarrito.push({
                    id: producto.idProducto,
                    nombre: producto.tituloProducto,
                    img: producto.imgProducto,
                    precio: producto.precioProducto
                })
                const obj = JSON.stringify(itemsCarrito);
                console.log(obj);
                localStorage.setItem("carrito",obj);
                console.log("Storage creado");
            })
        }

    
})

}

function agregarCarrito(){

    const storage = localStorage.getItem("carrito");
    const obj = JSON.parse(storage);

    const insertar = document.querySelector(".containerCarrito")

    insertar.innerHTML = ``

    obj.forEach(producto =>{

        let contenido = document.createElement("div")
        contenido.className = "item"
        contenido.innerHTML = `
        <span class="idProducto">SKU: ${producto.id}</span>
        <span class="tituloProducto">${producto.nombre}</span> 
        <img class="imgProducto" src="${producto.img}">
        <span class="precioProducto">${producto.precio}</span> 
        `

        insertar.append(contenido)
})

}
//----------------------------------------------------------------- LOCAL STORAGE -----------------------------------------------------------------------