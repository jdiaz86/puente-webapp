<template>
  <div>
    <form name="myForm" class="css-form" novalidate>
      <fieldset>
        <legend><h3 class="legend-title">{{ $t('course_screen_title') }}</h3></legend>
        <div class="row row-form">
          <div class="col-sm-3 col-md-12">
            <q-field icon="school">
              <q-input v-model="course.name" class="form-control" :readonly="viewMode" :disabled="viewMode" :float-label="$t('name_label')"/>
            </q-field>
          </div>
      </div>

      <div class="row row-form">
          <div class="col-sm-3 col-md-12">
            <q-field icon="code">
              <q-input v-model="course.code" class="form-control" :readonly="viewMode" :disabled="viewMode" :float-label="$t('code_label')"/>
            </q-field>
          </div>
       </div>

      <div class="row row-form">
          <div class="col-sm-3 col-md-12">
            <q-field icon="grade">
              <q-input v-model="course.grade" class="form-control" :readonly="viewMode" :disabled="viewMode" :float-label="$t('grade_label')"/>
            </q-field>
          </div>
      </div>

      <div class="row row-form">
          <div class="col-sm-3 col-md-12">
            <q-field icon="description">
              <q-input v-model="course.description" type="textarea" class="form-control" :readonly="viewMode" :disabled="viewMode" :float-label="$t('description_label')"/>
            </q-field>
          </div>
      </div>

      <br><br>

      <div class="row row-form">
        <div class="col-sm-0 col-md-8">
        </div>
        <div class="col-sm-3 col-md-2">
          <q-btn color="secondary" class="full-width" @click="goBack()">{{ $t('goback_text') }}</q-btn>
        </div>
        <div class="col-sm-3 col-md-2">
          <q-btn color="primary" class="full-width" v-if="editMode" @click="save()">{{ $t('save_text') }}</q-btn>
        </div>
      </div>

      </fieldset>
    </form>

  </div>
</template>

<script>
import {
  QBtn,
  QInput,
  QField
} from 'quasar'
import { mapState, mapActions } from 'vuex'
import {
  FETCH_COURSE,
  SAVE_COURSE
} from '../../store/types'
import * as _ from '../../util/util'

export default {
  name: 'logInUserPage',
  components: {
    QBtn,
    QInput,
    QField
  },
  created () {
    this.$route.query.mode === 'view' ? this.viewMode = true : this.viewMode = false
    this.$route.query.mode === 'edit' ? this.editMode = true : this.editMode = false
    if (this.$route.params.id) {
      this.loadCourse(this.$route.params.id)
    }
  },
  data () {
    return {
      viewMode: false,
      editMode: false
    }
  },
  computed: {
    ...mapState('courseModule', ['course', 'saving', 'errors', 'error'])
  },
  methods: {
    ...mapActions('courseModule', {
      loadCourse: FETCH_COURSE,
      saveCourse: SAVE_COURSE
    }),
    goBack () {
      window.history.go(-1)
    },
    async save () {
      if (this.editMode) {
        const result = await _.confirmDialog(this.$t('modify_dialog_title'), this.$t('modify_dialog_message'), this.$t('modify_dialog_ok'), this.$t('dialog_cancel'))
        if (result === 1) {
          _.successNotify(this.$t('modify_success_message'))
          this.goBack()
        }
      }
      // this.saveUser({ user })
    }
  }
}
</script>

<style scoped>
.css-form {
  margin: 5% 10%;
}
</style>
