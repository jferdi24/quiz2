﻿//GET quizes/question
exports.question = function (req, res) {
    res.render('quizes/question', { pregunta: 'Capital de Italia' });
};

//GET quiezes/answer
exports.answer = function (req, res) {
    if (req.query.respuesta === 'Roma' || req.query.respuesta === 'roma') {
        res.render('quizes/answer', { respuesta: '<p class="cbien"><b>Correcto</b></p>' });
    }
    else {
        res.render('quizes/answer', { respuesta: '<p class="cmal"><b>Incorrecto</b></p>' });
    }
};