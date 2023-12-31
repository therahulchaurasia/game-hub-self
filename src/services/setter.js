const handleObjChange = (setter, key, value) => {
  if (typeof setter !== "function" || !key) return
  setter((ps) => ({ ...ps, [key]: value }))
}

export default handleObjChange
