<template>
    <div class="sidebar">
        <div class="sidebar__backdrop" @click="toggleNavigation" v-if="isPanelOpen"></div>

        <div v-if="!isMobile"
             :class="['sidebar__panel', {'sidebar__panel--desktop': !isMobile}]">
            <nav id="menuDesktop" class="sidebar__navigation">
                <router-link :to="{ name: 'home' }" v-on:click.native="toggleNavigation">Home</router-link>
                | <router-link :to="{ name: 'articleList' }"  v-on:click.native="toggleNavigation">Articles</router-link>
                | <router-link :to="{ name: 'addArticle' }"  v-on:click.native="toggleNavigation">Add Article</router-link>
            </nav>
        </div>

        <transition name="slide">
            <div v-if="isPanelOpen"
                 class="sidebar__panel sidebar__panel--mobile">
                <nav id="menu" class="sidebar__navigation">
                    <router-link :to="{ name: 'home' }" v-on:click.native="toggleNavigation">Home</router-link>
                    <router-link :to="{ name: 'articleList' }"  v-on:click.native="toggleNavigation">Articles</router-link>
                    <router-link :to="{ name: 'addArticle' }"  v-on:click.native="toggleNavigation">Add Article</router-link>
                </nav>
            </div>
        </transition>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState: mapStateMenu, mapActions: mapActionsMenu } = createNamespacedHelpers('menu')
const { mapState: mapStateWindow } = createNamespacedHelpers('window')

/**
 * @module Sidebar
 */
export default {
  name: 'Sidebar',
  computed: {
    ...mapStateWindow({
      isMobile: state => state.isMobile
    }),
    ...mapStateMenu({
      isNavOpen: state => state.isNavOpen
    }),
    isPanelOpen () {
      return this.isNavOpen
    }
  },
  methods: {
    ...mapActionsMenu(['toggleNavigation'])
  }
}
</script>

<style lang="scss" scoped>
    @import "./../assets/styles/mixin";

    /** sidebar **/

    .slide-enter-active,
    .slide-leave-active
    {
        transition: transform 0.2s ease;
    }

    .slide-enter,
    .slide-leave-to {
        transform: translateX(-100%);
        transition: all 150ms ease-in 0s
    }

    .sidebar {
        &__backdrop {
            background-color: rgba(19, 15, 64, .4);
            width: 100vw;
            height: 100vh;
            position: fixed;
            top: 0;
            left: 0;
            cursor: pointer;
        }

        &__panel {
            overflow-y: auto;
            background-color: #130f40;
            position: fixed;
            left: 0;
            top: 0;
            height: 100vh;
            z-index: 999;
            padding: 3rem 20px 2rem 20px;
            width: 300px;

            @include md {
                overflow: auto;
                position: relative;
                padding: 20px 0;
                width: 100%;
                background-color: transparent;
                height: auto;
                z-index: 1;
            }
        }

        &__navigation {
            list-style-type: none;

            > a {
                color: #fff;
                text-decoration: none;
                font-size: 1.5rem;
                display: block;
                padding-bottom: 0.5em;

                @include md {
                    color: #1c3d5a;
                    text-decoration: none;
                    font-size: 22px;
                    display: inline-block;
                }

            }
        }
    }

</style>
