// Small shared helper — Gallery, Journeys, Destinations, and Posts all use it
// so search, sorting, and pagination work consistently everywhere.

const getPagination = (query) => {
    const page = Math.max(1, Number(query.page) || 1);
    const limit = Math.min(100, Math.max(1, Number(query.limit) || 12));
    const skip = (page - 1) * limit;
    return { page, limit, skip };
};

// sort=-views,name  ->  "-views name" for mongoose
const getSort = (sortParam, defaultSort) => {
    if (!sortParam) return defaultSort;
    return sortParam.split(',').join(' ');
};

module.exports = { getPagination, getSort };
