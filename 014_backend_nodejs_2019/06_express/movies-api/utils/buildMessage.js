function buildMessage(entity, action) {
    if (action === 'list') {
        return `${entity}s ${action}ed`
    } else {
        return `${entity} ${action}d`
    }
    
}

module.exports = {
    buildMessage
}