<template>
  <div>
    <form name="myForm" class="css-form-item-page" novalidate>
      <fieldset>
        <legend><h3 class="legend-title">{{ $t('course_enrollment_screen_title') }}</h3></legend>
        <div class="row row-form">
          <div class="col-sm-3 col-md-12">
            <q-field icon="person">
              <q-input v-model="item.user.username" class="form-control" :readonly="viewMode" :disabled="viewMode" :float-label="$t('teacher_label')"/>
            </q-field>
          </div>
      </div>

      <div class="row row-form">
          <div class="col-sm-3 col-md-12">
            <q-field icon="school">
              <q-input v-model="item.course.name" class="form-control" :readonly="viewMode" :disabled="viewMode" :float-label="$t('course_name_label')"/>
            </q-field>
          </div>
       </div>

      <div class="row row-form">
          <div class="col-sm-3 col-md-12">
            <q-field icon="calendar_today">
              <q-input v-model="item.year" class="form-control" :readonly="viewMode" :disabled="viewMode" :float-label="$t('year_label')"/>
            </q-field>
          </div>
      </div>

      <div class="row row-form">
          <div class="col-sm-3 col-md-12">
            <q-field icon="group">
              <q-input v-model="item.studentsAmount" class="form-control" :readonly="viewMode" :disabled="viewMode" :float-label="$t('students_amount_label')"/>
            </q-field>
          </div>
      </div>

      <div class="row row-form">
          <div class="col-sm-3 col-md-12">
            <q-field icon="description">
              <q-input v-model="item.description" type="textarea" class="form-control" :readonly="viewMode" :disabled="viewMode" :float-label="$t('description_label')"/>
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
import { mapState, mapActions, mapMutations } from 'vuex'
import {
  FETCH_COURSE_ENROLLMENT,
  SAVE_COURSE_ENROLLMENT,
  SET_COURSE_ENROLLMENT
} from '../../store/types'
import * as _ from '../../util/util'

export default {
  name: 'courseEnrollmentPage',
  components: {
    QBtn,
    QInput,
    QField
  },
  created () {
    this.$route.query.mode === 'view' ? this.viewMode = true : this.viewMode = false
    this.$route.query.mode === 'edit' ? this.editMode = true : this.editMode = false
    if (this.$route.params.id && this.$route.params.id !== 'new') {
      this.loadItem(this.$route.params.id)
    } else {
      this.setItem({})
      this.editMode = true
    }
  },
  data () {
    return {
      viewMode: false,
      editMode: false
    }
  },
  computed: {
    ...mapState('courseEnrollmentModule', ['item', 'saving', 'errors', 'error'])
  },
  methods: {
    ...mapActions('courseEnrollmentModule', {
      loadItem: FETCH_COURSE_ENROLLMENT,
      saveItem: SAVE_COURSE_ENROLLMENT
    }),
    ...mapMutations('courseEnrollmentModule', {
      setItem: SET_COURSE_ENROLLMENT
    }),
    goBack () {
      window.history.go(-1)
    },
    async save () {
      let title, message, ok
      if (this.$route.params.id === 'new') {
        title = this.$t('create_dialog_title')
        message = this.$t('create_dialog_message')
        ok = this.$t('create_dialog_ok')
      } else {
        title = this.$t('modify_dialog_title')
        message = this.$t('modify_dialog_message')
        ok = this.$t('modify_dialog_ok')
      }
      const result = await _.confirmDialog(title, message, ok, this.$t('dialog_cancel'))
      if (result === 1) {
        this.saveItem({ item: this.item })
        _.successNotify(this.$t('modify_success_message'))
        this.goBack()
      }
    }
  }
}
</script>

<style scoped>

</style>
