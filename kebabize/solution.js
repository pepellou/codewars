let kebabize = s => s.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/[^a-z-]/g, '').split('-').filter(_=>_!='').join('-');
