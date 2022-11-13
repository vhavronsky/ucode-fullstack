const i = require('./index')

i.firstUpper = function(string) {
    if (typeof string != 'string' || string == '') {
        return ' ';
    }

    return string.trim().charAt(0).toUpperCase() + string.slice(1).toLowerCase().trim();
}

console.log(`"testing String": ${i.firstUpper("testing String")}`);
console.log(`"   testing   String": ${i.firstUpper("   testing   String")}`);
console.log(`"07": ${i.firstUpper("07")}`);
console.log(`"": ${i.firstUpper("")}`);
console.log(`null: ${i.firstUpper(null)}`);

console.log(i.firstUpper('   ...I Will Rebuild Krypton Atop His Bones.'));
console.log(i.firstUpper(' 300room FOR yoUr   DESTiny   '));
