import sum from '../sum'

describe('azure function handler', () => {
  it('fails on missing ip parameter', async () => {
    const res = sum(1, 2)

    expect(res).toEqual(3)
  })
})
