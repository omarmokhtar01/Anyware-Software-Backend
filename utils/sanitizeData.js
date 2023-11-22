// to return specific data
exports.sanitizeUserLogin = function(user) {
    return {
    id: user._id,
    name: user.name,
    email: user.email,
    course: user.course,
    role: user.role,
    };
};

exports.sanitizeUserSignup = function(user) {
    return {
    id: user._id,
    name: user.name,
    email: user.email,
    course: user.course
    };
};