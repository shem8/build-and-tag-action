import path from 'path'
import readFile from '../src/utils/read-file'

describe('read-file', () => {
  const baseDir = path.join(__dirname, 'fixtures')

  it('reads the file and returns the contents', async () => {
    const result = await readFile(baseDir, 'file.md')
    expect(result).toBe('Hello!')
  })
})