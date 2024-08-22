document.addEventListener('DOMContentLoaded', function () {

    function Empleado(nombre, salario, departamento) {
        this.nombre = nombre;
        this.salario = salario;
        this.departamento = departamento;

        this.aumento = function (porcentaje) {
            this.salario = this.salario + (this.salario * (porcentaje / 100));
        }

        this.cambioDepartamento = function (nuevoDepartamento) {
            this.departamento = nuevoDepartamento;
        }

        this.obtenerDetalles = function () {
            return `Nombre: ${this.nombre}, Salario: $${this.salario}, Departamento: ${this.departamento}`;
        }
    }

    let nombre = prompt('Ingresa el nombre del empleado:');
    let salario = parseFloat(prompt('Ingresa el salario del empleado:'));
    let departamento = prompt('Ingresa el departamento del empleado:');
    let porcentajeAumento = parseFloat(prompt('Ingresa el porcentaje de aumento:'));
    let nuevoDepartamento = prompt('Ingresa el nuevo departamento (si no hay cambio, deja en blanco):');

    let empleado = new Empleado(nombre, salario, departamento)

    function actualizarDetalles(empleado) {
        document.getElementById('detallesEmpleado').innerHTML += `<p>${empleado.obtenerDetalles()}</p>`;
    }

    console.log(empleado.obtenerDetalles());
    actualizarDetalles(empleado);

    empleado.aumento(porcentajeAumento);
    console.log(empleado.obtenerDetalles());
    actualizarDetalles(empleado);

    empleado.cambioDepartamento(nuevoDepartamento);
    console.log(empleado.obtenerDetalles());
    actualizarDetalles(empleado);

});