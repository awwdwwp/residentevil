<template>
    <v-footer class="footer" padless>
        <v-container>
            <h3 class="footer-title">OFFICIAL CHANNELS</h3>

            <v-row>
                <v-col cols="12" md="6">
                    <ul class="links">
                        <li>
                            <a href="https://x.com/REBHPortal/" target="_blank">
                              Resident Evil Brand — @REBHPortal
                            </a>
                        </li>

                        <li>
                            <a href="https://x.com/RE_Games" target="_blank">
                               Resident Evil Games — @RE_Games
                             </a>
                        </li>
                    </ul>
                </v-col>

                <v-col cols="12" md="6">
                    <ul class="links">
                        <li><a href="https://www.facebook.com/residentevil/" target="_blank">Facebook</a></li>
                        <li><a href="https://www.youtube.com/user/ResidentEvil" target="_blank">YouTube</a></li>
                        <li><a href="https://www.instagram.com/re_games/" target="_blank">Instagram</a></li>
                    </ul>
                </v-col>
            </v-row>

            <div class="rating">
                <img src="https://game.capcom.com/residentevil/pc/img/common/footer/icon_esrb_portal_long.jpg">
            </div>

            <hr />
            <div class="legal">
                <a href="#">Terms of Use</a> /
                <a href="#">Privacy Policy</a> /
                <a href="#">Cookie Policy</a>
            </div>

            <div class="capcom">
        <img
          src="https://game.capcom.com/residentevil/pc/img/common/logo_capcom.png"
          height="40"
        />
        <p>© CAPCOM</p>
      </div>
        </v-container>
    </v-footer>
</template>

<script lang="ts">
export default {
    name:"PageFooter",
}
</script>

<style scoped>
.footer {
  background: #050505;
  color: white;
}

.footer-title {
  font-weight: bold;
  margin-bottom: 14px;
}

.links li {
  list-style: none;
  margin-bottom: 8px;
}

.links a {
  color: #ccc;
  text-decoration: none;
}

.links a:hover {
  color: red;
}

.rating img {
  margin-top: 15px;
  width: 300px;
}

.legal {
  margin-top: 20px;
  color: gray;
}

.legal a {
  color: white;
  text-decoration: none;
}

.capcom {
  margin-top: 20px;
}
</style>