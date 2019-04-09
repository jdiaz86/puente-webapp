import i18n from 'src/util/i18n'

export default ({ app, Vue }) => {
  i18n.locale = app.store.state.homeModule.language
  i18n.fallbackLocale = app.store.state.homeModule.language
  app.i18n = i18n
}
