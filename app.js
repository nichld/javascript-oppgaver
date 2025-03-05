console.log('Kjører JavaScript-oppgaver:\n');

try {
  console.log('--- Kjører oppgave 1 ---');
  require('./oppgaver/oppgave1');
  console.log('Oppgave 1 fullført\n');
} catch (error) {
  console.error('Feil i oppgave 1:', error);
}

try {
  console.log('--- Kjører oppgave 2 ---');
  require('./oppgaver/oppgave2');
  console.log('Oppgave 2 fullført\n');
} catch (error) {
  console.error('Feil i oppgave 2:', error);
}

try {
  console.log('--- Kjører oppgave 3 ---');
  require('./oppgaver/oppgave3');
  console.log('Oppgave 3 fullført\n');
} catch (error) {
  console.error('Feil i oppgave 3:', error);
}

console.log('Alle oppgaver er kjørt.');