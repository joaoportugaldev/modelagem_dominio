module.exports = {
    preset: 'ts-jest', // O preset utilizado é o do typescript com jest
    testEnvironment: 'node', // O ambiente de testes
    testMatch: ['**/test/**/*.test.ts'], // Onde ele encontra os arquivos de testes
    collectCoverage: true, // Se vai relatar a cobertura total dos testes
    moduleNameMapper: {
        '^@/test/(.*)': '<rootDir>/test/$1', //Facilitando a importação dentro dos arquivos dos testes direcionando para src
        '^@/(.*)': '<rootDir>/src/$1' //Facilitando a importação dentro dos arquivos dos testes direcionando para src
    },
    testPathIgnorePatterns: [
        '@/test/data/*'
    ],
    coveragePathIgnorePatterns: [
        '@/test/data/*'
      ]
}