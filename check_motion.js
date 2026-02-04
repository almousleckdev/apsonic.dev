
const { motion } = require('framer-motion');
console.log('Type of motion:', typeof motion);
console.log('Is motion.div defined?', !!motion.div);
console.log('Is motion["div"] defined?', !!motion['div']);
console.log('Is motion.create defined?', !!motion.create);
