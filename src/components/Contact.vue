<template>
  <div id="contact" class="columns is-marginless is-centered page-item">
    <div class="column is-11">
      <article>
        <p class="title has-text-centered">
          Contact
        </p>
        <hr class="is-divider" />
        <h3 class="has-text-centered">
          Interested in getting in touch with me? Feel free to contact me with
          one of the following:
        </h3>
        <br />
        <div class="columns is-centered is-marginless is-mobile">
          <div
            class="column is-half-mobile is-marginless is-paddingless is-two-thirds-desktop"
          >
            <div class="columns is-centered is-marginless">
              <div
                class="column has-text-centered is-marginless is-paddingless"
              >
                <h3>
                  <a href="mailto: cjhtsang@uwaterloo.ca" target="_blank">
                    <font-awesome-icon
                      :icon="['fas', 'envelope']"
                      size="lg"
                      fixed-width
                    />
                    cjhtsang@uwaterloo.ca
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style scoped>
#contact {
  padding-top: 6rem;
  padding-bottom: 6rem;
  background-color: var(--main-background);
}

a {
  display: inline-block;
}

a,
a:visited {
  color: var(--text-colour);
}
a:hover {
  color: var(--url-hover);
  text-decoration: none;
}
</style>
