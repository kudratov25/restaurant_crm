<script setup lang="ts">
import Logo from '@/layouts/dashboard/logo/LogoMain.vue';
import AuthLogin from '../authForms/AuthLogin.vue';
import SocialLogin from '../authForms/SocialLogins.vue'
</script>

<template>
  <v-row class="bg-containerBg position-relative" no-gutters>
    <!---Login Part-->
    <v-col cols="12" lg="12" class="d-flex align-center">
      <v-container>
        <div class="d-flex align-center justify-center" style="min-height: calc(100vh - 148px)">
          <v-row justify="center">
            <v-col cols="12" md="12">

              <v-card elevation="0" variant="outlined" rounded="lg" class="loginBox bg-surface">
                <v-card-text class="pa-sm-10 pa-6">
                  <div class="text-center">
                    <Logo class="mb-5" />
                    <SocialLogin />
                    <v-row>
                      <v-col cols="12" class="d-flex align-center">
                        <v-divider />
                        <div class="orbtn">OR</div>
                        <v-divider />
                      </v-col>
                    </v-row>
                  </div>
                  <!---Login Form-->
                  <AuthLogin />
                  <!---Login Form-->
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </v-col>
    <!---Login Part-->
  </v-row>
</template>
<style lang="scss">
.loginBox {
  max-width: 475px;
  margin: 0 auto;
}
</style>
