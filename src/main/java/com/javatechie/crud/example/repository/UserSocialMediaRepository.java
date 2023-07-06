package com.javatechie.crud.example.repository;

import com.javatechie.crud.example.entity.UserSocialMedia;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserSocialMediaRepository extends JpaRepository<UserSocialMedia,Integer> {
    public static String SelectAllInfoUser= "SELECT u.info_id , u.user_code, ui.user_name, ui.user_describe, u.info_link, s.social_name, s.social_key, ui.user_avatar " +
            "FROM social_media_user_info u " +
            "INNER JOIN social_media s ON u.social_id = s.social_id " +
            "INNER JOIN user_info ui ON ui.user_code = u.user_code " +
            "WHERE u.user_code = :user_code";
    @Query(value = SelectAllInfoUser,nativeQuery = true)
    public List<UserSocialMedia> findByUserCode(@Param("user_code") String user_code);
}
