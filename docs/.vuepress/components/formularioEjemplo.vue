<template>
  <div>
    <div class="bg-info text-white p-5">
      <section class="mb-4">
        <h2 class="h1-responsive font-weight-bold text-center my-4">
          Contactanos
        </h2>
        <p class="text-center w-responsive mx-auto mb-5">
          Somo una empresa para realizar proyectos, contactanos ahora!
        </p>

        <div class="row">
          <div class="col-md-9 mb-md-0 mb-5">
            <form name="contact-form" action="mail.php" method="POST">
              <div class="row">
                <div class="col-md-6">
                  <div class="md-form mb-0">
                    <input type="text" name="name" class="form-control" />
                    <label for="name" class="">Nombre</label>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="md-form mb-0">
                    <input type="text" name="email" class="form-control" />
                    <label for="email" class="">Correo Electronico</label>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="md-form mb-0">
                    <input type="text" class="form-control" />
                    <label class="">Tema</label>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="md-form">
                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      rows="2"
                      class="form-control md-textarea"
                    ></textarea>
                    <label for="message">Mensaje para contacto</label>
                  </div>
                </div>
              </div>
            </form>

            <div class="text-center flex text-md-left">
              <a class="btn btn-success">Enviar</a>
            </div>
          </div>
          <div class="col-md-3 text-center">
            <ul class="list-unstyled mb-0">
              <li>
                <p>Ciudad de México</p>
              </li>

              <li>
                <p>+52 5521435677</p>
              </li>

              <li>
                <p>Alex@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
