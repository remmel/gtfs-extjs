Ext.define('CB.model.Agency', {
    extend: 'Ext.data.Model',
    fields: ['agencyId', 'agencyName', 'agencyUrl', 'agencyTimezone', 'agencyLang'],
    idProperty: 'agencyId'
});