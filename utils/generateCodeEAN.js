export const generateCodeEAN = () => {
    const baseCode = Array.from({ length: 12 }, () => Math.floor(Math.random() * 10)).join('');

    // Calcul de la clé de contrôle
    const calculateCheckDigit = (code) => {
        let sum = 0;
        for (let i = 0; i < 12; i++) {
            const digit = parseInt(code[i], 10);
            sum += (i % 2 === 0) ? digit : digit * 3;
        }
        const remainder = sum % 10;
        return remainder === 0 ? 0 : 10 - remainder;
    };

    const checkDigit = calculateCheckDigit(baseCode);
    return baseCode + checkDigit;
};
