export const querys = {
  EliminarUsuarioTodo: "DELETE FROM docentes",
  InsertarCuentaDocente: "INSERT INTO cuenta_docentes (no_personal, contraseña, correo, url_imagen) VALUES ($1, $2, $3, $4 )",
  ObtenerInfoDocentes: "SELECT D.nombre, D.no_personal, D.facultad, C.url_Imagen FROM docentes D INNER JOIN cuenta_docentes C ON D.no_personal = C.no_personal WHERE D.no_personal = $1",
  VerMateriaDocente: "SELECT ncr_materia FROM docente_materias WHERE numero_personal = $1",
  EncontrarMateriaDocente: "SELECT * FROM materias WHERE nrc = $1",
  verificarCuenta: "SELECT no_personal FROM cuenta_docentes WHERE correo = $1 AND contraseña = $2",
  CuentaExistente: "SELECT COUNT(correo) FROM cuenta_docentes WHERE correo = $1",
  DocenteExistencia: "SELECT COUNT(no_personal) FROM docentes WHERE no_personal = $1;",
};
