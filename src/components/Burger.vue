<template>
        <div class="burger"
             :class="{ 'burger--active' : isBurgerActive }"
             @click.prevent="toggleNavigation">
            <slot>
                <button type="button" class="burger__button" title="Menu">
                    <span class="burger--hidden">Toggle menu</span>
                    <span class="burger__bar burger__bar--1"></span>
                    <span class="burger__bar burger__bar--2"></span>
                    <span class="burger__bar burger__bar--3"></span>
                </button>
            </slot>
        </div>
</template>

<script>

import { createNamespacedHelpers } from 'vuex'
const { mapState: mapStateMenu, mapActions: mapActionsMenu } = createNamespacedHelpers('menu')

/**
 * @module Burger
 */
export default {
  name: 'Burger',
  computed: {
    ...mapStateMenu({
      isNavOpen: state => state.isNavOpen
    }),
    isBurgerActive () {
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

    .router-link-exact-active {
        color: #42b983;
    }

    button {
        cursor: pointer;

        &:focus {
            outline: 0;
        }
    }

    .burger {
        &__button {
            position: relative;
            height: 30px;
            width: 32px;
            display: block;
            z-index: 999;
            border: 0;
            border-radius: 0;
            background-color: transparent;
            pointer-events: all;
            transition: transform .6s cubic-bezier(.165, .84, .44, 1);

            @include md {
                display: none;
            }

            &:hover .burger__bar--2 {
                transform: scaleX(1);
            }
        }

        &--hidden {
            visibility: hidden;
        }

        &--active {
            .burger__button {
                transform: rotate(-180deg);
            }

            .burger__bar {
                background-color: #fff;

                &--1 {
                    transform: rotate(45deg);
                }

                &--2 {
                    opacity: 0;
                }

                &--3 {
                    transform: rotate(-45deg)
                }
            }
        }

        &__bar {
            background-color: #130f40;
            position: absolute;
            top: 50%;
            right: 6px;
            left: 6px;
            height: 2px;
            width: auto;
            margin-top: -1px;
            transition: transform .6s cubic-bezier(.165, .84, .44, 1), opacity .3s cubic-bezier(.165, .84, .44, 1), background-color .6s cubic-bezier(.165, .84, .44, 1);

            &--1 {
                -webkit-transform: translateY(-6px);
                transform: translateY(-6px);
            }

            &--2 {
                transform-origin: 100% 50%;
                transform: scaleX(.8);
            }

            &--3 {
                transform: translateY(6px);
            }
        }
    }

    .no-touchevents .burger__bar--2:hover {
        transform: scaleX(1);
    }
</style>
