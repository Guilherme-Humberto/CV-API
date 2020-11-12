// Configurado Multer
// Local de armazenamento das imagens
// Formatos suportados

const multer = require ('multer')
const path = require ('path')
const crypto = require ('crypto')

module.exports = {
    dest: path.resolve(__dirname, '..', '..', 'temp', 'uploads'),
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.resolve(__dirname, '..', '..', 'temp', 'uploads'))
        },
        filename: (req, file, cb) => {
            crypto.randomBytes(16,(err, hash) => {
                if(err) cb(err, file.filename)
                const filename = `${hash.toString('hex')}-${file.originalname}`
                cb(null, filename)
            } )
        }
    }),
    limits: { fileSize: 2 * 1024 * 1024 }, 
    fileFilter: (req, file, cb) => {
        const allowedMimes = [
            'image/jpeg',
            'image/jpg',
            'image/png',
            'image/gif',
            'image/jfif'
        ]

        allowedMimes.includes(file.mimetype) ? cb(null, true) : cb(new Error('Invalid file type'))
    }
}
