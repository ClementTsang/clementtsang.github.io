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
          the following:
        </h3>
        <br />
        <div class="columns is-centered is-marginless is-mobile">
          <div class="column is-half">
            <div class="columns is-centered is-marginless is-mobile">
              <div class="column has-text-centered">
                <h3>
                  <a href="tel:+16479936280" target="_blank">
                    <font-awesome-icon
                      :icon="['fas', 'phone']"
                      size="lg"
                      fixed-width
                    />
                    +1 (647) 993-6280
                  </a>
                </h3>
              </div>
              <div class="column has-text-centered">
                <h3>
                  <a href="mailto: cjhtsang@edu.uwaterloo.ca" target="_blank">
                    <font-awesome-icon
                      :icon="['fas', 'envelope']"
                      size="lg"
                      fixed-width
                    />
                    cjhtsang@edu.uwaterloo.ca
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
  name: "Contact"
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
