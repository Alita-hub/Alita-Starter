package com.alita.common.util.file.strategys;

import com.alita.common.util.file.FileStrategy;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.util.UUID;

/**
 * 本地存储策略
 * @author: alita
 */
@Component
public class LocalFileStrategy extends FileStrategy {

    private final String rootPath = System.getProperty("user.dir") + File.separator + "files";

    @Override
    public String upload(MultipartFile file) {
        //原始文件名
        String originalName = file.getOriginalFilename();
        //获取后缀名
        String suffix = "";
        int index = originalName.lastIndexOf(".");
        if (index > -1) {
            suffix = originalName.substring(index);
        }

        String newName = UUID.randomUUID().toString() + suffix;
        File dir = new File(rootPath);
        if (!dir.exists()) {
            dir.mkdirs();
        }

        String newPath = rootPath + File.separator + newName;

        try {
            file.transferTo(new File(newPath));
        } catch (IOException e) {
            e.printStackTrace();
        }

        return newName;
    }

    @Override
    public InputStream download(String fileName) throws FileNotFoundException {
        return new FileInputStream(rootPath + File.separator + fileName);
    }

    @Override
    public void delete(String fileName) {
        File file = new File(rootPath + File.separator + fileName);

        try {
            file.delete();
        } catch (Exception ex) {
            ex.printStackTrace();
        }
    }

}
