const db = require('./_database')

async function updateData(){
    await db.connect();

    const queryUpdateParticipante = "UPDATE participante SET nome=$1 WHERE id=$2";
    await db.query(queryUpdateParticipante, ['Alberto',4])


    const queryUpdateEventoParticipante = "UPDATE evento_participante SET evento_id=$1 WHERE evento_id=$2";
    await db.query(queryUpdateEventoParticipante, [1,1])

    await db.end()

    console.log("Dados atualizados");
}

updateData()