<template>
    <div>
        <form>
            <div class="form-row align-items-center">
            <div class="col-auto">
                <label class="sr-only" for="inlineFormInput">Nombre</label>
                <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Steve Romita">
            </div>
            <div class="col-auto">
                <label class="sr-only" for="inlineFormInputGroup">Nombre de usuario</label>
            <div class="input-group mb-2">
            <div class="input-group-prepend">
            <div class="input-group-text">@</div>
            </div>
                <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Nombre de usuario">
            </div>
            </div>
            <div class="col-auto">
            <div class="form-check mb-2">
                <input class="form-check-input" type="checkbox" id="autoSizingCheck">
                <label class="form-check-label" for="autoSizingCheck">
                    Recuerdame
                </label>
            </div>
            </div>
            <div class="col-auto">
                <button type="submit" class="btn btn-primary mb-2">Entrar</button>
            </div>
            </div>
         </form>
    </div>
</template>