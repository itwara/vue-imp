<template>
  <div class="hello">
    <h2>Essential Links</h2>
    <ul>
      <li v-for="(item, idx) in EssentialLinks" :key="idx" v-imp @imp="onImp">
        <a :href="item.href" target="_blank">{{item.title}}</a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li v-for="(item,idx) in Ecosystems" :key="idx">
        <a :href="item.href" target="_blank">{{item.title}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { imp } from '../../src/index'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      EssentialLinks: [
        {
          href: 'https://vuejs.org',
          title: 'Core Docs'
        },
        {
          href: 'https://forum.vuejs.org',
          title: 'Forum'
        },
        {
          href: 'https://chat.vuejs.org',
          title: 'Community Chat'
        },
        {
          href: 'https://twitter.com/vuejs',
          title: 'Twitter'
        },
        {
          href: 'http://vuejs-templates.github.io/webpack/',
          title: 'Docs for This Template'
        }
      ],
      Ecosystems: [
        {
          href: 'http://router.vuejs.org/',
          title: 'vue-router'
        },
        {
          href: 'http://vuex.vuejs.org/',
          title: 'vuex'
        },
        {
          href: 'http://vue-loader.vuejs.org/',
          title: 'vue-loader'
        },
        {
          href: 'https://github.com/vuejs/awesome-vue',
          title: 'awesome-vue'
        },
        {
          href: 'http://router.vuejs.org/',
          title: 'vue-router'
        },
        {
          href: 'http://vuex.vuejs.org/',
          title: 'vuex'
        },
        {
          href: 'http://vue-loader.vuejs.org/',
          title: 'vue-loader'
        },
        {
          href: 'https://github.com/vuejs/awesome-vue',
          title: 'awesome-vue'
        },
        {
          href: 'http://router.vuejs.org/',
          title: 'vue-router'
        },
        {
          href: 'http://vuex.vuejs.org/',
          title: 'vuex'
        },
        {
          href: 'http://vue-loader.vuejs.org/',
          title: 'vue-loader'
        },
        {
          href: 'https://github.com/vuejs/awesome-vue',
          title: 'awesome-vue'
        },
        {
          href: 'http://router.vuejs.org/',
          title: 'vue-router'
        },
        {
          href: 'http://vuex.vuejs.org/',
          title: 'vuex'
        },
        {
          href: 'http://vue-loader.vuejs.org/',
          title: 'vue-loader'
        },
        {
          href: 'https://github.com/vuejs/awesome-vue',
          title: 'awesome-vue'
        },
        {
          href: 'http://router.vuejs.org/',
          title: 'vue-router'
        },
        {
          href: 'http://vuex.vuejs.org/',
          title: 'vuex'
        },
        {
          href: 'http://vue-loader.vuejs.org/',
          title: 'vue-loader'
        },
        {
          href: 'https://github.com/vuejs/awesome-vue',
          title: 'awesome-vue'
        },
        {
          href: 'http://router.vuejs.org/',
          title: 'vue-router'
        },
        {
          href: 'http://vuex.vuejs.org/',
          title: 'vuex'
        },
        {
          href: 'http://vue-loader.vuejs.org/',
          title: 'vue-loader'
        },
        {
          href: 'https://github.com/vuejs/awesome-vue',
          title: 'awesome-vue'
        }
      ]
    }
  },
  directives: {
    imp
  },
  methods: {
    onImp () {
      console.log('imp')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
