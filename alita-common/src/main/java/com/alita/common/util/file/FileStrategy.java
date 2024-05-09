package com.alita.common.util.file;

import org.springframework.web.multipart.MultipartFile;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.InputStream;

/**
 * 文件管理抽象策略
 * @author: alita
 */
public abstract class FileStrategy {

    /**
     * 上传文件
     *
     * @param file
     * @return {@link String}
     */
    public abstract String upload(MultipartFile file);

    /**
     * 下载文件
     */
    public abstract InputStream download(String fileName) throws FileNotFoundException;

    /**
     * 删除文件
     *
     * @param fileName
     */
    public abstract void delete(String fileName);

}
