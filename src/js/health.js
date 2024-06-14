export default function getHealth(objHealth) {

    let healthStatus = '';

    if (objHealth.health < 0) throw new Error('The object value is a negative number');
    if (typeof (objHealth.health) !== 'number') throw new Error('The value of the object is not a number')
    if (objHealth.health > 50) healthStatus = 'зелёный';
    if (objHealth.health < 50 && objHealth.health > 15) healthStatus = 'жёлтый';
    if (objHealth.health < 15) healthStatus = 'красный';

    return healthStatus;

}