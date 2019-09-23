<template>
  <div id="contact" class="columns is-marginless is-centered page-item">
    <div class="column is-11 is-8-desktop">
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
        <div class="columns is-centered is-marginless">
          <div class="column has-text-centered">
            <font-awesome-icon :icon="['fas', 'phone']" size="2x" fixed-width />
            <h3>
              <a href="tel:+16479936280" target="_blank">
                +1 (647) 993-6280
              </a>
            </h3>
          </div>
          <div class="column has-text-centered">
            <font-awesome-icon
              :icon="['fas', 'envelope']"
              size="2x"
              fixed-width
            />
            <h3>
              <a href="mailto: cjhtsang@edu.uwaterloo.ca" target="_blank">
                cjhtsang@edu.uwaterloo.ca
              </a>
            </h3>
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
  background-color: var(--main-background-two);
}
</style>
