package com.devonfw.application.mtsj.usermanagement.rest.api;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.springframework.data.domain.Page;

import com.devonfw.application.mtsj.usermanagement.common.api.to.ResetLinkEto;
import com.devonfw.application.mtsj.usermanagement.common.api.to.UserEto;
import com.devonfw.application.mtsj.usermanagement.common.api.to.UserQrCodeTo;
import com.devonfw.application.mtsj.usermanagement.common.api.to.UserRoleEto;
import com.devonfw.application.mtsj.usermanagement.common.api.to.UserRoleSearchCriteriaTo;
import com.devonfw.application.mtsj.usermanagement.common.api.to.UserSearchCriteriaTo;
import com.devonfw.application.mtsj.usermanagement.logic.api.Usermanagement;

/**
 * The service interface for REST calls in order to execute the logic of component {@link Usermanagement}.
 */
@Path("/usermanagement/v1")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public interface UsermanagementRestService {

  /**
   * Delegates to {@link Usermanagement#findUser}.
   *
   * @param id the ID of the {@link UserEto}
   * @return the {@link UserEto}
   */
  @GET
  @Path("/user/{id}/")
  public UserEto getUser(@PathParam("id") long id);

  /**
   * Delegates to {@link Usermanagement#generateUserQrCode}.
   *
   * @param username the username of the {@link UserQrCodeTo}
   * @return the {@link UserQrCodeTo}
   */
  @GET
  @Path("/user/pairing/{username}/")
  public UserQrCodeTo getUserQrCode(@PathParam("username") String username);

  /**
   * Delegates to {@link Usermanagement#saveUser}.
   *
   * @param user the {@link UserEto} to be saved
   * @return the recently created {@link UserEto}
   */
  @POST
  @Path("/user/")
  public UserEto saveUser(UserEto user);

  /**
   * Delegates to {@link Usermanagement#sendPasswordResetLink}.
   *
   * @param user the {@link UserEto} to send the link to
   */
  @POST
  @Path("/user/resetlink")
  public void sendPasswordResetLink(UserEto user);

  /**
   * Delegates to {@link Usermanagement#validatePasswordResetLink}.
   *
   * @param hashCode the {@link String} to validate
   */
  @GET
  @Path("/user/resetlink/{token}")
  public ResetLinkEto validatePasswordResetLink(@PathParam("token") String token);

  /**
   * Delegates to {@link Usermanagement#getUserStatus}.
   *
   * @param username the {@link UserEto} to be saved
   * @return the recently created {@link UserEto}
   */
  @GET
  @Path("/user/twofactor/{username}")
  public UserEto getUserStatus(@PathParam("username") String username);

  /**
   * Delegates to {@link Usermanagement#saveUserTwoFactor}.
   *
   * @param user the {@link UserEto} to be saved
   * @return the recently created {@link UserEto}
   */
  @POST
  @Path("/user/twofactor")
  public UserEto saveUserTwoFactor(UserEto user);

  /**
   * Delegates to {@link Usermanagement#deleteUser}.
   *
   * @param id ID of the {@link UserEto} to be deleted
   */
  @DELETE
  @Path("/user/{id}/")
  public void deleteUser(@PathParam("id") long id);

  /**
   * Delegates to {@link Usermanagement#findUserEtos}.
   *
   * @param searchCriteriaTo the pagination and search criteria to be used for finding users.
   * @return the {@link PaginatedListTo list} of matching {@link UserEto}s.
   */
  @Path("/user/search")
  @POST
  public Page<UserEto> findUsersByPost(UserSearchCriteriaTo searchCriteriaTo);

  /**
   * Delegates to {@link Usermanagement#findUserbyName}.
   *
   * @param username to search for
   * @return the matching {@link UserEto}.
   */
  @GET
  @Path("/user/search/{username}")
  public UserEto findUserByName(@PathParam("username") String username);

  /**
   * Delegates to {@link Usermanagement#findUserRole}.
   *
   * @param id the ID of the {@link UserRoleEto}
   * @return the {@link UserRoleEto}
   */
  @GET
  @Path("/userrole/{id}/")
  public UserRoleEto getUserRole(@PathParam("id") long id);

  /**
   * Delegates to {@link Usermanagement#saveUserRole}.
   *
   * @param userrole the {@link UserRoleEto} to be saved
   * @return the recently created {@link UserRoleEto}
   */
  @POST
  @Path("/userrole/")
  public UserRoleEto saveUserRole(UserRoleEto userrole);

  /**
   * Delegates to {@link Usermanagement#deleteUserRole}.
   *
   * @param id ID of the {@link UserRoleEto} to be deleted
   */
  @DELETE
  @Path("/userrole/{id}/")
  public void deleteUserRole(@PathParam("id") long id);

  /**
   * Delegates to {@link Usermanagement#findUserRoleEtos}.
   *
   * @param searchCriteriaTo the pagination and search criteria to be used for finding userroles.
   * @return the {@link PaginatedListTo list} of matching {@link UserRoleEto}s.
   */
  @Path("/userrole/search")
  @POST
  public Page<UserRoleEto> findUserRolesByPost(UserRoleSearchCriteriaTo searchCriteriaTo);

}
